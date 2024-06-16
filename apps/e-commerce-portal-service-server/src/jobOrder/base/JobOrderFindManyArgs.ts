/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { JobOrderWhereInput } from "./JobOrderWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobOrderOrderByInput } from "./JobOrderOrderByInput";

@ArgsType()
class JobOrderFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => JobOrderWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => JobOrderWhereInput, { nullable: true })
  @Type(() => JobOrderWhereInput)
  where?: JobOrderWhereInput;

  @ApiProperty({
    required: false,
    type: [JobOrderOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [JobOrderOrderByInput], { nullable: true })
  @Type(() => JobOrderOrderByInput)
  orderBy?: Array<JobOrderOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { JobOrderFindManyArgs as JobOrderFindManyArgs };
