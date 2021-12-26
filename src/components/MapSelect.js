import { TileLayer, Popup, MapContainer, Marker } from "react-leaflet";

export default class MapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    this.setState({ currentPos: e.latlng });
  }

  render() {
    return (
      <div>
        <MapContainer center={this.props.center} zoom={this.props.zoom} onClick={this.handleClick} style={{height: 400, width: "100%"}}>
          <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          { this.state.currentPos && 
            <Marker position={this.state.currentPos} draggable={true}>
              <Popup position={this.state.currentPos}>
                Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
              </Popup>
            </Marker>
          }
        </MapContainer>
      </div>
    )
  }
}

