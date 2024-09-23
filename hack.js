/** @param {NS} ns **/
export async function main(ns) {
    // Get the name of the server the script is running on
    const server = ns.getHostname();
    
    // Keep hacking the server until there's no money left
    while (ns.getServerMoneyAvailable(server) > 0) {
        // Hack the server
        await ns.hack(server);
        // Print the current status of the server's money
        ns.print(`Money left on ${server}: $${ns.getServerMoneyAvailable(server)}`);
        
        // Optional sleep to prevent overwhelming the game (adjust as necessary)
        await ns.sleep(100);
    }
    
    ns.tprint(`Server ${server} is out of money.`);
}
