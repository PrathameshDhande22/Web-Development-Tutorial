using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NotesManager.Data.Migrations
{
    /// <inheritdoc />
    public partial class NoteHisoryCascadeHandling : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NoteHistory_Notes_NoteId",
                table: "NoteHistory");

            migrationBuilder.AddColumn<DateTimeOffset>(
                name: "DeletedAt",
                table: "Category",
                type: "datetimeoffset",
                nullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_NoteHistory_Notes_NoteId",
                table: "NoteHistory",
                column: "NoteId",
                principalTable: "Notes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_NoteHistory_Notes_NoteId",
                table: "NoteHistory");

            migrationBuilder.DropColumn(
                name: "DeletedAt",
                table: "Category");

            migrationBuilder.AddForeignKey(
                name: "FK_NoteHistory_Notes_NoteId",
                table: "NoteHistory",
                column: "NoteId",
                principalTable: "Notes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
