pipeline {
    agent any 
    stages {
        stage("build") {
            steps {
                sh "npm install"
                sh "npm run build"
                echo "npm installing"
                echo "npm application building"
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
