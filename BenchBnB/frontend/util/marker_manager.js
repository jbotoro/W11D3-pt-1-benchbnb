
export default class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log('time to update')
        const benchPojo = {};
        benches.forEach(bench => 
            benchPojo[bench.id] = bench);
        benches.filter(bench => !this.markers[bench.id])
        .forEach(newBench => 
            this.createMarkerFromBench(newBench,this.handleClick)
            )
    }

    createMarkerFromBench(bench) {
        const pos = new google.maps.LatLng(bench.lat, bench.lng)
        const marker = new google.maps.Marker({
            pos,
            map: this.map,
            benchId: bench.id
        });

        marker.addListener('click', () => this.handleClick(bench));
        this.markers[marker.bendchId] = marker;
    }
}