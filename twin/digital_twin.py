class DigitalTwin:

    def __init__(self):

        self.state = {}

    def update(self, telemetry):

        self.state = telemetry

    def get_state(self):

        return self.state