# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "williamyeh/ubuntu-trusty64-docker"

  config.vm.network :private_network, ip: "192.168.33.39"

  config.vm.provider :virtualbox do |v|
    v.name = "docker.dev"
    v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    v.customize ["modifyvm", :id, "--ioapic", "on"]
  end


  config.vm.provision "docker"

  config.vm.synced_folder ".", "/vagrant", disabled:true

  # install packages
  config.vm.provider "docker" do |d|
    d.build_dir = "./www"
  end




  config.ssh.insert_key = false
  config.vm.hostname = "instalist"

end
