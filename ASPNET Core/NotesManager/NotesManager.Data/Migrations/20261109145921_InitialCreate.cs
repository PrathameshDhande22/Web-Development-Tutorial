using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NotesManager.Data.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Category",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: false),
                    Color = table.Column<string>(type: "nvarchar(40)", maxLength: 40, nullable: false),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UpdatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false, defaultValue: "Draft"),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false),
                    UpdatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Notes_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "NoteHistory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NoteId = table.Column<int>(type: "int", nullable: false),
                    Action = table.Column<string>(type: "nvarchar(60)", maxLength: 60, nullable: false),
                    OldTitle = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    NewTitle = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: true),
                    OldStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NewStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OldDescription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NewDescripton = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OldCategoryId = table.Column<int>(type: "int", nullable: true),
                    NewCategoryId = table.Column<int>(type: "int", nullable: true),
                    CreatedAt = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NoteHistory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_NoteHistory_Category_NewCategoryId",
                        column: x => x.NewCategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NoteHistory_Category_OldCategoryId",
                        column: x => x.OldCategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NoteHistory_Notes_NoteId",
                        column: x => x.NoteId,
                        principalTable: "Notes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_NoteHistory_NewCategoryId",
                table: "NoteHistory",
                column: "NewCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_NoteHistory_NoteId",
                table: "NoteHistory",
                column: "NoteId");

            migrationBuilder.CreateIndex(
                name: "IX_NoteHistory_OldCategoryId",
                table: "NoteHistory",
                column: "OldCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Notes_CategoryId",
                table: "Notes",
                column: "CategoryId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NoteHistory");

            migrationBuilder.DropTable(
                name: "Notes");

            migrationBuilder.DropTable(
                name: "Category");
        }
    }
}
