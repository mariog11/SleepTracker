import { TestBed } from '@angular/core/testing';
import { SleepService } from './sleep.service';
describe('SleepService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SleepService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=sleep.service.spec.js.map