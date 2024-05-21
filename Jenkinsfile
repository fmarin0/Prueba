pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    

    stae('Test') {
      steps {
        script {
                    // Ejecutar el servidor Express
                    sh 'node app.js &'
                    
                    // Esperar un minuto
                    sleep time: 1, unit: 'MINUTES'
                    
                    // Detener el servidor Express después de un minuto
                    sh 'killall node'
            }
      }
    }
}

}
