/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProcurementWhereUniqueInput } from "../../procurement/base/ProcurementWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ProcurementUpdateManyWithoutJobOrdersInput {
  @Field(() => [ProcurementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProcurementWhereUniqueInput],
  })
  connect?: Array<ProcurementWhereUniqueInput>;

  @Field(() => [ProcurementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProcurementWhereUniqueInput],
  })
  disconnect?: Array<ProcurementWhereUniqueInput>;

  @Field(() => [ProcurementWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProcurementWhereUniqueInput],
  })
  set?: Array<ProcurementWhereUniqueInput>;
}

export { ProcurementUpdateManyWithoutJobOrdersInput as ProcurementUpdateManyWithoutJobOrdersInput };
