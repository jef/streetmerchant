#!groovy

pipeline {

  agent {
    kubernetes {
      inheritFrom 'default' // name of kubernetes cloud pod template in jenkins
    }
  }

  stages {
    stage('Build') {
      steps {
        container('kaniko') {
          sh '''
            /kaniko/executor \
                                --dockerfile `pwd`/Dockerfile \
                                --context `pwd` \
                                --destination registry.dev.svc.cluster.local:5000/streetmerchant:latest \
                                --skip-tls-verify
          '''
        }
      }
    }

    stage ('Stage deploy test') {
      steps {
        container(name: 'kubectl', shell: '/bin/sh') {
            withCredentials([file(credentialsId: 'KUBECONFIGFILE', variable: 'KUBECONFIG')]) {
              sh "echo $KUBECONFIG > /.kube/config"
              sh 'kubectl apply -f manifest.yaml --insecure-skip-tls-verify=true'
          }
        }
      }
    }
  }
}