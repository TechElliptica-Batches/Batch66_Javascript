pipeline {
    agent any

    tools {
        nodejs "NodeJS-20"
    }

    environment {
        CI = "true"
    }

    options {
        timestamps()
        ansiColor('xterm')
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/TechElliptica-Batches/Batch66_Javascript.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Report') {
            steps {
                sh 'npx playwright show-report --host 0.0.0.0 &'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true

            archiveArtifacts artifacts: 'test-results/**', fingerprint: true

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])

            junit allowEmptyResults: true,
                  testResults: 'test-results/*.xml'

            cleanWs()
        }

        success {
            echo 'Automation executed successfully.'
        }

        failure {
            echo 'Automation execution failed.'
        }
    }
}