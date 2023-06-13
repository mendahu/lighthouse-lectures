# Networking with TCP and HTTP

- [ ] Networking, Clients and Servers
- [ ] IP Addresses and Ports
- [ ] TCP vs UDP
- [ ] TCP Chat Client
- [ ] HTTP

# What is a network?

- a stream of communication between at least two different parties
- a group of connected systems
- In theory, any one system on a network could communicate with any other one system

# Clients and Servers

- A majority of networking is made up of clients and servers
- In **general** servers have information and clients want it
- the labels define a role in a single interaction, not a permanent role

## OSI Model and Network Layers

- 7 layers that build up the network
- From hardware to application

# IP - Internet Protocol

- Layer 3
- To uniquely identify any one system on a network
- IP comes in two flavours - IPv4 and IPv6
  - IPv4 - `192.168.0.1`
  - IPv6 - `2001:db8:3333:4444:5555:6666:7777:8888`
- In addition to an address, IP specifies a Port number
- There are 65,535 different ports on every IP connected machine
- Some ports as "reserved"
  - HTTP 80
  - HTTPS 443
  - FTP 21
  - SMTP 25
  - SSH 22
  - Postgres 5432
- 10.245.16.1:80
- In the world of the internet, there is another tech called DNS -> literally translates domains to IPs

# TCP / UDP

- Two techs which help us shape the data we send.

* Break data into packets and these are sent over the network layer
* UDP
  - User Datagram Protocol
  - Connectionless
  - No error recovery
  - No guaranteed order of arrival
  - USeful for streaming and low latency applications
* TCP
  - Transmission Control Protocol
  - LArger packets
  - Connectionful?? connection
  - three way handshake
  - error recovery
  - guaranteed arrival order
  - Useful when guaranteed communication is needed

// REturn at 5 past the hour!!

# HTTP

- Hyper Text Transfer Protocol
- With our TCP client/server, we were just sending strings (technically Buffers)
- no structure
- HTTP adds structure to that string
- Call and Response - stateless
- Method and a Path
  - Method (verb) - GET, POST, PATCH, PUT, DELETE
  - Path - www.lighthouselabs.ca/programs - path is "/programs"
- HTTP resposnes return standardized status codes
  - 2xx - good! everything worked!
  - 3xx - redirects
  - 4xx - user error
    - 404 not found
  - 5xx - server error
- Requests and responses also have something called headers
  - data type
  - authorization
- Requests and Responses can also have bodies
  - Big bulk data
