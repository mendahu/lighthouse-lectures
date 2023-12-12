# Networking with TCP and HTTP

- [ ] Networking, Clients and Servers
- [ ] IP Addresses and Ports
- [ ] TCP vs UDP
- [ ] TCP Chat Client
- [ ] HTTP

## What is networking???

- Communication between multiple machines on a network
- In theory on a network, any device should be able to communicate with any other device

### Clients and Servers

- The majority of networking is made up of client/server relationships/connections
- In any connection, you generally have one server and one client, (server gives info when client asks for it)
- Not device specific -it's abotu the role of the device in any interaction

### OSI Model and Network Layers

- 7 layers of technology that builds on the previous to form a network
- Refer to diagram

### IP (Internet Protocol)

- Layer 3
- A tech which uniquely identifies a device on a network
- Allows other devices to find it via some path
- Two parts of IP that we need to be familiar with
  - IP Address
    - `1.102.103.104` (IPv4) (0-255)
    - `2001:db8:3333:4444:5555:6666:7777:8888` (IPv6)
  - Port
    - A port identifies an applicaiton at an address
    - There are 65,535 ports on each network connected device with IP
    - There are some standardized ones that we use
      - HTTP: 80
      - HTTPS: 443
      - FTP: 21
      - SMTP: 25
      - SSH: 22
      - Postgres (Database): 5432

### TCP and UDP

- These two protocols do the same job, just differently
- Break data into packets and send them over the network in a predictable, understandable format
- UDP
  - Smaller header and packets size
  - Connectionless, which means it doesn't require a response (fire and forget)
  - Makes it simple
  - Optimized for large one way transfers
- TCP
  - Larger header size, comes with error correction
  - Requires a handshake/3 way handshake/connection
  - optimized for one time guaranteed connections.

## DEMO
