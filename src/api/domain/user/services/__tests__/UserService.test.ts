import UserService from '@/api/domain/user/services/UserService';
import expect from 'expect';

describe('AllocationService', () => {
  describe('getFirstAllocation', () => {
    it('should successfully return allocation item', async () => {
      const result = await UserService.getAllUsers();

      expect(result).toEqual({
        id: expect.any(String),
        name: expect.any(String),
        email: expect.any(String),
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });
  });
});
