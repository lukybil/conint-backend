pipeline {
  agent {
    node {
      label 'Deploy'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }

  }
}