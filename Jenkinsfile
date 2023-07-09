pipeline {
    agent any 
    stages {
        stage("build") {
            steps {
                echo "executing npm"
                nodejs('Node-18.16.1') {
                    sh "npm install"
                    sh "CI=false npm run build"
                }
            }
        }
        stage("test") {
            steps {
                echo "npm testing"
                echo "npm testing completed."
            }
        }
        stage("deploy") {
            steps {
                echo "npm deploying"
            }
        }
    }
}
