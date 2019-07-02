import { TestBed } from '@angular/core/testing';
import { FirebaseService } from './firebase.service';
describe('FirebaseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FirebaseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=firebase.service.spec.js.map