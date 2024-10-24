kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.13.0/cert-manager.yaml

sleep 10

kubectl get all --namespace cert-manager

echo '\n ################################### \n ################################### \n'

kubectl apply -f 1-nginx-internal-controller.yaml

sleep 30

kubectl get nginxingresscontroller

echo '\n ################################### \n ################################### \n'

echo '\n #########-- Record the Nginx internal controller in the DNS --############ \n'

echo '\n Waitting ... \n'

#read 
#
#echo '\n ################################### \n ################################### \n'
#
#kubectl apply -f 2-cluster-issuer.yaml
#
#sleep 15
#
#kubectl get clusterissuer -owide
#
#echo '\n ################################### \n ################################### \n'
#
#kubectl apply -f 3-ingress-internal.yaml
#
#sleep 30
#
#kubectl get ingress -owide  
#
#echo '\n ################################### \n ################################### \n'





