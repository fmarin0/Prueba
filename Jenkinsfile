pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    

    stage('Test') {
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
   post {
        always {
            script {
                // Configuración del remitente y destinatarios
                emailext (
                    subject: "Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} finished with status: ${currentBuild.currentResult}</p>
                             <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                    to: 'jhernandez117@ucol.mx',
                    from: 'jhernandez117@ucol.mx',
                )
            }
        }
        success {
            script {
                // Notificación en caso de éxito
                emailext (
                    subject: "SUCCESS: Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} finished successfully.</p>
                             <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                    to: 'jhernandez117@ucol.mx',
                    from: 'jhernandez117@ucol.mx',
                )
            }
        }
        failure {
            script {
                // Notificación en caso de fallo
                emailext (
                    subject: "FAILURE: Build ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                    body: """<p>Build ${env.JOB_NAME} #${env.BUILD_NUMBER} failed.</p>
                             <p>Check console output at <a href="${env.BUILD_URL}">${env.BUILD_URL}</a></p>""",
                    to: 'jhernandez117@ucol.mx',
                    from: 'jhernandez117@ucol.mx',
                )
            }
        }
    }
}
