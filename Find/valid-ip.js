function findIP(text) {
    // const r = /(\d+).(\d+).(\d+).(\d+)/
    // const m = text.match(r)
    const ips = [
      '233.123.12.234',
      '192.168.1.123:8080',
      '192.169.1.23',
      '10.1.23.7',
      '0.0.0.0:22',
      '255.253.123.2:8000',
      '192.168.1.123',
      '0.0.0.0'
    ]
    return ips.filter(ip => text.includes(ip))
} 


//   [
//     '233.123.12.234',
// +   '233',
// +   '123',
// +   '12',
// +   '234',
// +   groups: undefined,
// +   index: 118,
// +   input: 'qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you qq 233.123.12.234 qw w wq wqw  wqw  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsd https://devdocs.io/javascript/global_objects/object/fromentries njnkfsdjnk sfdjn fsp fd192.168.1.123:8080 https://devdocs.io/javascript/global_objects/regexp/@@split\n' +
// +     'htpp://wrong/url hello %$& wf* ][½¬ http://correct/url?correct=yes è[}£§ https://nan-academy.github.io/js-training/?page=editor#data.nested 255.256.1233.2\n' +
// +     'ssages has become an accepted part of many cultures, as happened earlier with emailing. htt://[1] This makes texting a quick and http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy way to communicate 255.256.2 with friends, family and colleagues, including 255.256.555.2 in contexts where a call would be when one knows the other person is busy 192.169.1.23 with family or work activities).; 172.01.123.254:1234\n' +
// +     'for example, to order products or 10.1.23.7 http://www_example.com/ 255.255.255.000 09.09.09.09\n' +
// +     'services fromhttps://regex-performance.github.io/exercises.html 3...3 0.0.0.0:22 0.0.0.0:68768\n' +
// +     'this permits communication even between busy individuals255.253.123.2:8000 https: // . Text messages can also http:// be used to http://example.com/path?name=Branch&products=[Journeys,Email,Universal%20Ads]interact with automated systems,https:// regex -performance.github.io/ exercises.html172.01.123.999:1234\n' +
// +     'https//nan-academy.github.io/js-training/?page=editor#data.nested impolite or inappropriate (e.g., calling very late at night orhttp://localhost/exercises\n' +
// +     'https://192.168.1.123?something=nothing&pro=[23] htts:/nan-academy.github.io/js-training?b=123&a=123/?page=editor#data.nested  Like e-mail and voicemail and unlike calls (in which the caller hopes to speak directly with the recipient),\n' +
// +     'http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot texting does not require the caller and recipient to both be free at the same moment0.0.0.0'
// -   '192.168.1.123:8080',
// -   '192.169.1.23',
// -   '10.1.23.7',
// -   '0.0.0.0:22',
// -   '255.253.123.2:8000',
// -   '192.168.1.123',
// -   '0.0.0.0'
//   ]