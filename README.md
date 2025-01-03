Dont forget to add this command ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H unix:// -H tcp://0.0.0.0:2375 in file /lib/systemd/system/docker.service
