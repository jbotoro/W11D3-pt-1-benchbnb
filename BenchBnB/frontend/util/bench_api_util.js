export const fetchBenches = data => (
    $.ajax({
        method: 'GET',
        url: 'api/benches',
        error: err => console.log(err),
        data
    })
);