import random

class DroneSimulator:

    def __init__(self):

        self.signal_strength = 95
        self.packet_loss_rate = 1
        self.round_trip_time = 20
        self.altitude = 100
        self.transmission_power = 50
        self.signal_noise_ratio = 40
        self.network_traffic_volume = 500
        self.gps_signal_integrity = 95
        self.base_station_load = 30

    def update(self):

        self.signal_strength += random.uniform(-2, 2)

        self.packet_loss_rate += random.uniform(-0.5, 0.5)

        self.round_trip_time += random.uniform(-5, 5)

        self.network_traffic_volume += random.uniform(-50, 50)

        return {

            "signal_strength": self.signal_strength,
            "packet_loss_rate": self.packet_loss_rate,
            "round_trip_time": self.round_trip_time,
            "altitude": self.altitude,
            "transmission_power": self.transmission_power,
            "signal_noise_ratio": self.signal_noise_ratio,
            "network_traffic_volume": self.network_traffic_volume,
            "gps_signal_integrity": self.gps_signal_integrity,
            "base_station_load": self.base_station_load

        }