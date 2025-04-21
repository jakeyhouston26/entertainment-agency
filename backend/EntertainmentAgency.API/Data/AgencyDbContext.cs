using Microsoft.EntityFrameworkCore;
using EntertainmentAgency.API.Data;


namespace EntertainmentAgency.API.Data
{
    public class AgencyDbContext : DbContext
    {
        public AgencyDbContext(DbContextOptions<AgencyDbContext> options)
            : base(options)
        {
        }

        public DbSet<Entertainer> Entertainers { get; set; }
        public DbSet<Engagement> Engagements { get; set; }

    }
}
