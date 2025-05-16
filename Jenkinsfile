pipeline {
    agent {
        docker {
            image 'node:18'
            args '-u root' // Optional: allows full permissions inside container
        }
    }

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the GitHub repo
                git 'https://github.com/yourusername/your-nextjs-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Start App') {
            steps {
                // Run the app in background so Jenkins doesn't hang
                sh 'nohup npm run start &'
                // Confirm server is running (optional health check)
                sh 'sleep 5 && curl -I http://localhost:3000 || echo "App not reachable"'
            }
        }
    }

    post {
        always {
            echo '✅ Build and run completed (even if app didn’t stay running long-term)'
        }
        failure {
            echo '❌ Something went wrong during build or start.'
        }
    }
}
