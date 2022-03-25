import { ApiProperty } from "@nestjs/swagger";

export class PivoParkingSpaceDto {

    @ApiProperty()
    parking_id: number;

    @ApiProperty()
    space_id: number;

    @ApiProperty()
    exite_date: Date;


}
