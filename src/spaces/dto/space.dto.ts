import { ApiProperty } from "@nestjs/swagger";

export class SpaceDto {

    @ApiProperty()
    space_name: string;

    @ApiProperty()
    created_at: Date;

    @ApiProperty()
    deleted_at: Date;

}
