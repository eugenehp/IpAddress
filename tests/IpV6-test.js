define(['IpAddress/IpV6'], function(ipv6) {
    'use strict';

    describe('is valid IpV6', function () {
        it('2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d should be true', function () {
            expect(ipv6.isValid('2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d')).toBe(true);
        });

        it('FE80:0:0:0:2AA:FF:FE9A:4CA2 should be true', function () {
            expect(ipv6.isValid('FE80:0:0:0:2AA:FF:FE9A:4CA2')).toBe(true);
        });

        it('FE80::2AA:FF:FE9A:4CA2 should be true', function () {
            expect(ipv6.isValid('FE80::2AA:FF:FE9A:4CA2')).toBe(true);
        });

        it('FF02::2 should be true', function () {
            expect(ipv6.isValid('FF02::2')).toBe(true);
        });

        it('::1 should be true', function () {
            expect(ipv6.isValid('::1')).toBe(true);
        });

        it(':: should be true', function () {
            expect(ipv6.isValid('::')).toBe(true);
        });

        it('"" should be false', function () {
            expect(ipv6.isValid('')).toBe(false);
        });

        it('2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d:344:253:234 should be false', function () {
            expect(ipv6.isValid('2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d:344:253:234')).toBe(false);
        });

        it('2001::rtuiy: should be false', function () {
            expect(ipv6.isValid('2001::rtuiy:')).toBe(false);
        });

        it('2001::0db8:11a3:09d7::8a2e should be false', function () {
            expect(ipv6.isValid('2001::0db8:11a3:09d7::8a2e')).toBe(false);
        });
    });

    describe('ipV6 normalization', function () {
        it('::1 should be 0000:0000:0000:0000:0000:0000:0000:0001', function () {
            var initValue = '::1',
                result = '0000:0000:0000:0000:0000:0000:0000:0001';

            expect(ipv6.normalize(initValue)).toBe(result);
        });

        it('FF02::2 should be FF02:0000:0000:0000:0000:0000:0000:0002', function () {
            var initValue = 'FF02::2',
                result = 'FF02:0000:0000:0000:0000:0000:0000:0002';

            expect(ipv6.normalize(initValue)).toBe(result);
        });

        it(':: should be 0000:0000:0000:0000:0000:0000:0000:0000', function () {
            var initValue = '::',
                result = '0000:0000:0000:0000:0000:0000:0000:0000';

            expect(ipv6.normalize(initValue)).toBe(result);
        });
    });

    describe('ipV6 parsing', function () {

        it('::1 should be 0000:0000:0000:0000:0000:0000:0000:0001', function () {
            var initValue = '::1',
                result = '[0,0,0,0,0,0,0,1]';

            expect(ipv6.parse(initValue)).toEqual(result);
        });

        it('::1 should be 0000:0000:0000:0000:0000:0000:0000:0001', function () {
            var initValue = '::1',
                result = '[0,0,0,0,0,0,0,1]';

            expect(ipv6.parse(initValue)).toEqual(result);
        });

    });

});