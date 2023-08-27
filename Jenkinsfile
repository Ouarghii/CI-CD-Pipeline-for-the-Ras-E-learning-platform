pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps {
        sh 'checkout scm'
      }
    }

    stage('Install Backend Dependencies') {
      steps {
        sh '''def nodejsHome = tool name: \'NodeJS\', type: \'jenkins.plugins.nodejs.tools.NodeJSInstallation\'
def npmHome = tool name: \'npm\', type: \'jenkins.plugins.nodejs.tools.NpmInstallation\'

env.PATH = "${nodejsHome}/bin:${npmHome}/bin:${env.PATH}"
dir(\'server\') {
    sh \'npm install\'
}
'''
      }
    }

    stage('Build and Test Backend') {
      steps {
        sh '''dir(\'server\') {
   sh \'npm run build\'
   sh \'npm test\'
}'''
        }
      }

      stage('Install Frontend Dependencies') {
        steps {
          sh '''def nodejsHome = tool name: \'NodeJS\', type: \'jenkins.plugins.nodejs.tools.NodeJSInstallation\'
def npmHome = tool name: \'npm\', type: \'jenkins.plugins.nodejs.tools.NpmInstallation\'

env.PATH = "${nodejsHome}/bin:${npmHome}/bin:${env.PATH}"
dir(\'client\') {
    sh \'npm install\'
}
'''
        }
      }

      stage('Build and Test Frontend') {
        steps {
          sh '''dir(\'client\') {
    sh \'npm run build\'
    sh \'npm test\'
}'''
          }
        }

        stage('Deploy') {
          steps {
            sh 'echo \'Deploy stage\''
          }
        }

      }
    }