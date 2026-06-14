environment    = "stage"
location       = "eastus"
container_port = 80
min_replicas   = 1
max_replicas   = 2

tags = {
  environment = "stage"
  purpose     = "devops-practice"
}
