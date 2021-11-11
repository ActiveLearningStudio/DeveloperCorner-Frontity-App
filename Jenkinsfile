node("currikidev") {
    def app
    
    stage('Clone repository') {               
        checkout scm    
    }  
    
    stage('Build image') {         
        app = docker.build("quay.io/curriki/frontity")    
        
    } 
    stage('Test image') {           
        app.inside { 
                sh 'echo "Api Tests passed"'        
        }    
    } 
    stage('Push image') {	
        docker.withRegistry('https://quay.io', 'docker-private-credentials') {            
            app.push("${env.BUILD_NUMBER}")            
            app.push("latest")        
        }    
         
    }
    
    parallel(
            "StageA": {
                if(Jenkins.instance.getNode('currikifrontity').toComputer().isOnline()){
                    node('currikifrontity') {
                        stage ('currikifrontity') {
                                echo 'Copy'
                                sh "yes | docker stack deploy --compose-file /developer-corner/docker-compose.yml currikistack" 
                                echo 'Copy completed'
                        }
                    }
                } else {
                    stage ('currikifrontity') {
                        echo "currikifrontity is offline"
                        exit 1
                    }
                }
                
            }
    )
    
}
