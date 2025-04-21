namespace EntertainmentAgency.API.Data
{
    public class EntertainerSummary
    {
        public int EntertainerID { get; set; }
        public string EntStageName { get; set; }
        public int BookingCount { get; set; }
        public string? LastBookingDate { get; set; }
    }
}
