pipeline {
    agent any {
        stages {
            stage("build") {
                steps {
                    echo "npm building"
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
}