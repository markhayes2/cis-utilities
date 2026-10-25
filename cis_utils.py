import player
import loops
import Math


def set_orientation(who: str, degree: number):
    """
        Rotates a player or agent to a specific compass heading.

        Parameters:
        who    -- The target entity - "@s", "@p", or "@c" (self, nearest player, agent)
        degree -- The angle (0=South, 90=West, -90=East, -180/180=North)
    """
    # command = "tp @s ~ ~ ~  " + str(degree) + " 0"  # tp @s [position] [yaw] [pitch]
    command = "tp " + who + " ~ ~ ~  " + str(degree) + " 0"  # tp @s [position] [yaw] [pitch]
    player.execute(command)

    # slight pause to let the Agent get into position
    loops.pause(100)

    # display the Player's orientation in the chat
    direction = Math.round(player.get_orientation())
    player.say("Player rotated to: " + str(direction))
