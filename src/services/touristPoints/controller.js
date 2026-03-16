import { distance, moveTo, getBoundingBox } from 'geolocation-utils';

export function distancia(local, local2){
    const pontoA = { lat: -23.5505, lon: -46.6333 };
    const pontoB = { lat: -22.9068, lon: -43.1729 };

    const dist = distance(pontoA, pontoB);
    console.log(`A distância é ${Math.round(dist / 1000)} km`);
}

export function newCord(lat, lon){
    const centro = { lat, lon };

    const norte = moveTo(centro, { distance: 5000, heading: 0 });
    const leste = moveTo(centro, { distance: 5000, heading: 90 });
    const sul   = moveTo(centro, { distance: 5000, heading: 180 });
    const oeste = moveTo(centro, { distance: 5000, heading: 270 });

    const caixa = getBoundingBox([norte, leste, sul, oeste]);

    const paramCoord = `${caixa.topLeft.lon},${caixa.topLeft.lat},${caixa.bottomRight.lon},${caixa.bottomRight.lat}`;

    return paramCoord
}
