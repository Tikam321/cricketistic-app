pipeline {
    agent any {
        stages {
            stage("build") {
                echo "npm building"
            }
            stage("test") {
                echo "npm testing"
            }
            stage("deploy") {
                echo "npm deploying in docker"
            }
        }
    }
}