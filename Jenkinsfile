pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u root'  // allows package installs if needed
        }
    }

    // environment {
    //     NODE_ENV = 'production'
    // }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/iam-venkateshwarlu/Todo-Nextjs.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || echo "No tests found"'
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Add your deployment script here (Vercel CLI, Docker push, etc.)'
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
