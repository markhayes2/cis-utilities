namespace cis_utils {
    export function set_orientation(who: string, degree: number) {
        /** 
        Rotates a player or agent to a specific compass heading.

        Parameters:
        who    -- The target entity - "@s", "@p", or "@c" (self, nearest player, agent)
        degree -- The angle (0=South, 90=West, -90=East, -180/180=North)
    
 */
        //  command = "tp @s ~ ~ ~  " + str(degree) + " 0"  # tp @s [position] [yaw] [pitch]
        let command = "tp " + who + " ~ ~ ~  " + ("" + degree) + " 0"
        //  tp @s [position] [yaw] [pitch]
        player.execute(command)
        //  slight pause to let the Agent get into position
        loops.pause(100)
        //  display the Player's orientation in the chat
        let direction = Math.round(player.getOrientation())
        player.say("Player rotated to: " + ("" + direction))
    }
    
}
