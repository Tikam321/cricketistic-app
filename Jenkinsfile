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
            }
        }
        stage("deploy") {
            steps {
                echo "npm deploying"
            }
        }
    }
}
