function ipv4Parser(ip, mask) {
    const ipParts = ip.split('.').map(Number);
    const maskParts = mask.split('.').map(Number);
    const network = ipParts.map((octet, index) => octet & maskParts[index]);
    const host = ipParts.map((octet, index) => octet - network[index]);
    const networkStr = network.join('.');
    const hostStr = host.join('.');
    return [networkStr, hostStr];
}
