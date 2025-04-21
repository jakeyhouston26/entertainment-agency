using EntertainmentAgency.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EntertainmentAgency.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EntertainersController : ControllerBase
    {
        private readonly AgencyDbContext _context;

        public EntertainersController(AgencyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
public async Task<ActionResult<IEnumerable<EntertainerSummary>>> GetEntertainers()
{
    var result = await _context.Entertainers
        .Select(e => new EntertainerSummary
        {
            EntertainerID = e.EntertainerID,
            EntStageName = e.EntStageName,
            BookingCount = _context.Engagements.Count(en => en.EntertainerID == e.EntertainerID),
            LastBookingDate = _context.Engagements
                .Where(en => en.EntertainerID == e.EntertainerID)
                .OrderByDescending(en => en.EndDate)
                .Select(en => en.EndDate)
                .FirstOrDefault()
        })
        .ToListAsync();

    return result;
}


        [HttpGet("{id}")]
        public async Task<ActionResult<Entertainer>> GetEntertainer(int id)
        {
            var entertainer = await _context.Entertainers.FindAsync(id);
            if (entertainer == null) return NotFound();
            return entertainer;
        }

        [HttpPost]
        public async Task<ActionResult<Entertainer>> AddEntertainer(Entertainer entertainer)
        {
            _context.Entertainers.Add(entertainer);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEntertainer), new { id = entertainer.EntertainerID }, entertainer);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEntertainer(int id, Entertainer entertainer)
        {
            if (id != entertainer.EntertainerID) return BadRequest();
            _context.Entry(entertainer).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntertainer(int id)
        {
            var entertainer = await _context.Entertainers.FindAsync(id);
            if (entertainer == null) return NotFound();
            _context.Entertainers.Remove(entertainer);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
