# Networking with TCP and HTTP

- [ ] Networking, Clients and Servers
- [ ] IP Addresses and Ports
- [ ] TCP vs UDP
- [ ] TCP Chat Client
- [ ] HTTP

## Networking - What is it????

- Communication between machines that are on a network
- In theory - any one computer on a network, can communicate with another on the same network

## Clients and Servers

- The majority of networking is made up of these client - server relationships
- in general - the client is asking for information and the server is giving it
- Client and Server describe the role in any one interaction, not their permanent job.

## OSI Model and Network Layers

- OSI Model - Open Systems Interconnection Model - is sort of the stack of technologies which allow us to do networking

* every layer of the OSI Model is built on the layer below it.
* lowest layer is hardware, upper layers are software.
* As web developers we get to live mostly at the top of the stack, roughly layers 3 -7

## IP - Internet Protocol

- Layer 3 of the OSI Model
- To uniquely identify servers and clients and their location on a network
- IP is what assigns the IP Addresses
  - IPv4 - '192.168.0.1' Four octets of numbers
  - IPv6 - '2001:db8:3920:4432:5555:6666:7777:8888'
- We think of IP addresses as like an address for your house
- In conjuction with an IP address, we also need what's called a PORT
- And each IP Address, in the IP Protocol, supports up to 65,535 ports
- Popular Ports
  - HTTP: 80
  - HTTPS: 443
  - FTP: 21
  - SMTP: 25
  - Postgres: 5432

## TCP (and some UDP)

- TCP - Transmission Control Protocol
- TCP describes how we break apart data and send it to its destination
- Break information into what are called packets
- Characteristics
  - Guarantees packet order
  - TCP operates on a 3-way handshake - it confirms receipt
  - Some protection against corruption
  - TCP depends on IP
- UDP (User Datagram Protocol) - a simpler version or alternative to TCP
  - Smaller packet sizes
  - No error recovery
  - No handshake - fire and forget

# TCP Chat Server

// RETURN AT 2:15 PM EST / 11:15 PST

## HTTP

- Hyper Text Transfer Protocol
- Built on TCP/IP
- HTTP provides some structure and standards to what data we send
- Defines how we transmit, what shapre we transmit, what data we transmit
- HTTP Requests are call and response
  - A client sends a request and the server sends a response
  - Requests/Responses are STATELESS
- HTTP Requests has a lot of information, but two key parts that you must know as a web developer are Method and Path

### Methods

- Instrction for what kind of request it is
- it's a verb
- GET, POST, PUT, PATCH, DELETE

### Path

- IP already tell us the IP address, is the thing behind a domain name
  - https://www.google.com -> converts to IP
- Path is what comes after
  - https://www.google.com/search

### Reponses

- Responses always have a status code
  - 200 - Everything is ok
  - 404 - Not found
  - 403 - Not authorized
  - 50x - Server error
- Has a body
