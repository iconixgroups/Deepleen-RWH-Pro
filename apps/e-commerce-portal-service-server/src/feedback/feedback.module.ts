import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeedbackModuleBase } from "./base/feedback.module.base";
import { FeedbackService } from "./feedback.service";
import { FeedbackController } from "./feedback.controller";
import { FeedbackResolver } from "./feedback.resolver";

@Module({
  imports: [FeedbackModuleBase, forwardRef(() => AuthModule)],
  controllers: [FeedbackController],
  providers: [FeedbackService, FeedbackResolver],
  exports: [FeedbackService],
})
export class FeedbackModule {}
