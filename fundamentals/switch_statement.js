const day = 'wednesday';


switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

    case 'friday':
        console.log('record videos');
        break;
    
    case 'saturday':
    case 'sunday':
        console.log('Enjoy weeeked');
        break;
    default:
        console.log('Not a valid day');

}
