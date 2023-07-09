pipeline {
    agent any 
    stages {
        stage("build") {
            steps {
                echo "npm building"
                echo "npm application built"
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
