import { ApiProperty } from "@nestjs/swagger";

export class ParkingDto {
  
    @ApiProperty()
    parking_name: string;

    @ApiProperty()
    parking_lat: number;
    
    @ApiProperty()
    parking_long: number;

    @ApiProperty()
    parking_price_hour: number;


}
