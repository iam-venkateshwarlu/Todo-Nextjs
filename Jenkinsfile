pipeline {
    agent any

    tools {
        nodejs 'NodeJS_18'  // Name must match what you configured in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/iam-venkateshwarlu/Todo-Nextjs.git'
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run') {
            steps {
                sh 'nohup npm run start &'
                sh 'sleep 5 && curl -I http://localhost:3000 || echo "App not reachable"'
            }
        }
    }
}
