import ExecutionContextManager from '@/db/context/ExecutionContextManager';

class UserService {
  getAllUsers() {
    const ctx = ExecutionContextManager.createExecutionContext();
    return ctx.prisma.user.findMany({});
  }
}

export default new UserService();
