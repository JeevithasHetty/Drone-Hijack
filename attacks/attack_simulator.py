import random

class AttackSimulator:

    def gps_spoofing(self, telemetry):

        telemetry["gps_signal_integrity"] = random.randint(0, 20)

        telemetry["signal_strength"] = random.randint(10, 30)

        telemetry["packet_loss_rate"] = random.randint(30, 70)

        telemetry["round_trip_time"] = random.randint(300, 500)

        telemetry["network_traffic_volume"] = random.randint(3000, 5000)

        return telemetry